import React from 'react'
import {storeClicks} from "@/db/apiClicks";
import {getLongUrl} from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {BarLoader} from "react-spinners";

const RedirectLink = () => {
  const {id} = useParams();
  const urlId = id?.trim(); // Clean the URL parameter

  const {loading, error, data, fn} = useFetch(getLongUrl, urlId);

  const {loading: loadingStats, fn: fnStats} = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  useEffect(() => {
    if (urlId) {
      console.log("Fetching URL for id:", urlId);
      fn();
    }
  }, [urlId]);

  useEffect(() => {
    console.log("Data received:", data);
    console.log("Loading state:", loading);
    console.log("Error state:", error);
    
    if (!loading && data && data.original_url) {
      console.log("Redirecting to:", data.original_url);
      fnStats();
      // Ensure the URL has a protocol
      const url = data.original_url.startsWith('http') 
        ? data.original_url 
        : `https://${data.original_url}`;
      window.location.href = url;
    }
  }, [loading, data]);

  if (!urlId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Invalid URL</h1>
        <p className="text-gray-500">No URL identifier provided.</p>
      </div>
    );
  }

  if (loading || loadingStats) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <BarLoader width={"100%"} color="#36d7b7" />
        <br />
        <p className="text-lg">Redirecting...</p>
        <p className="text-sm text-gray-500">URL ID: {urlId}</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Link not found!</h1>
        <p className="text-gray-500">The requested URL does not exist.</p>
        <p className="text-sm text-gray-400 mt-2">URL ID: {urlId}</p>
        {error && (
          <p className="text-sm text-red-400 mt-2">Error: {error.message}</p>
        )}
      </div>
    );
  }

  return null;
};

export default RedirectLink;