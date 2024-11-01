import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

  export default function Random() {
    return (
        <div>
            <h1>Random Recipe</h1>
            <h2>Random Recipe Exchange</h2>
            <p>Pick from a selection of ten curated dishes.</p>
           
        </div>
    );
};

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  footer: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  },
};