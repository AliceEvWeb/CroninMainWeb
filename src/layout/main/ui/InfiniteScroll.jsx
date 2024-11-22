import React, { useEffect, useState, useRef, useCallback } from "react";
import { Grid, Typography, CircularProgress } from "@mui/material";

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]); // Store all items
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1); // Page to track loading new data
  const observerRef = useRef(null); // To track the last item

  // Function to fetch data
  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    // Simulate an API call
    const newItems = await new Promise((resolve) => {
      setTimeout(() => {
        const fetchedItems = Array.from(
          { length: 12 },
          (_, i) => `Item ${(page - 1) * 12 + i + 1}`
        );
        resolve(fetchedItems);
      }, 1500);
    });
    setItems((prevItems) => [...prevItems, ...newItems]);
    setIsLoading(false);
  }, [page]);

  // Observer to trigger when last item is visible
  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1); // Load more when the last item is in view
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [isLoading]);

  // Fetch initial items
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <Grid container spacing={2} justifyContent="center">
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Typography>{item}</Typography>
        </Grid>
      ))}
      {isLoading && (
        <Grid item xs={12} display="flex" justifyContent="center">
          <CircularProgress />
        </Grid>
      )}
      <div ref={observerRef} />
    </Grid>
  );
};

export default InfiniteScrollComponent;
