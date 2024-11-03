import React from "react";
import Card from "./Card";

const SetupGuide = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Get ready to sell</h1>
      <p>Here’s a guide to get started. As your business grows, you’ll get fresh tips and insights here.</p>

      <Card title="Manage your digital products" description="Connect an app to manage your digital products like courses, ebooks, art, music, or NFTs." buttonText="Browse digital product apps" />
      <Card title="Add your first product" description="Add a product to start selling online." buttonText="Add product" />
      {/* Additional cards can be added here */}
    </div>
  );
};

export default SetupGuide;
