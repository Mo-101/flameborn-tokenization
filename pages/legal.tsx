import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

export async function getStaticProps() {
  const files = ['Terms_of_Use', 'Privacy_Policy', 'Flameborn_Manifesto', 'No_Malice_Charter'];

  const docs = files.map((file) => {
    const filePath = path.join(process.cwd(), 'legal', `${file}.md`);
    const content = fs.readFileSync(filePath, 'utf-8');
    return { title: file.replace(/_/g, ' '), content };
  });

  return {
    props: { docs },
  };
}

export default function Legal({ docs }: any) {
  return (
    <div className="p-8 max-w-4xl mx-auto text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-6">🛡️ Flameborn Legal Framework</h1>
      {docs.map((doc: any, index: number) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">{doc.title}</h2>
          <pre className="whitespace-pre-wrap text-sm bg-gray-800 p-4 rounded">{doc.content}</pre>
        </div>
      ))}
    </div>
  );
}
