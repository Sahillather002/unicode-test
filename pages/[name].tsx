// pages/[name].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { name } = router.query;
  const [containsUnicode, setContainsUnicode] = useState(false);

  useEffect(() => {
    if (name) {
      // Check if the name contains any Unicode characters
      const unicodePattern = /[^\u0000-\u007F]/;
      setContainsUnicode(
        unicodePattern.test(decodeURIComponent(name as string))
      );
    }
  }, [name]);

  const handleDownload = () => {
    const sampleFileUrl = "/sample.txt"; // URL to the sample file
    const link = document.createElement("a");
    link.href = sampleFileUrl;
    link.download = "sample.txt"; // Specify the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello {decodeURIComponent(name as string)}</h1>
      <p>
        {containsUnicode
          ? "The URL contains Unicode characters."
          : "The URL does not contain Unicode characters."}
      </p>
      <button
        onClick={handleDownload}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Download Sample File
      </button>
    </div>
  );
};

export default Page;
