import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import LinkList from "./Components/LinkList";
import LinkForm from "./Components/LinkForm";

export default function Home() {

  const [links, setLinks] = useState([]);
  const loadLinks = async () => {
    try {
      const res = await fetch('/.netlify/functions/getLinks');
      const links = await res.json();
      setLinks(links);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Jamstack Serverless Todo</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />

    </div>
  )

}
