import { useCallback, useEffect, useState } from "react";

async function sendHttp(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong. Failed to send request"
    );
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(initialData)

 const sendRequest = useCallback( async function sendRequest() {
    setIsLoading(true)
    try {
      const resData = await sendHttp(url, config);
      setData(resData)
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false)
  }, [url, config])

  useEffect(() => {
    if(!config ||config.method === 'GET' || !config.method) {
    sendRequest()}
  }, [sendRequest, config])

  return {
    error,
    isLoading,
    data,
    sendRequest
  }
}