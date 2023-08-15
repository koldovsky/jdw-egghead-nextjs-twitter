'use client';

import React from "react";

export default function Likes({tweet}) {
    return <button>{tweet.likes.length} Likes</button>;
}
