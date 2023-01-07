import { createClient } from "contentful";

async function getPhotos() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "photo" });
  return res.items;
}

export default async function Photos() {
  const photos = await getPhotos();
  return (
    <main className="container text-white" style={{ marginTop: "6.5rem" }}>
      <h1 className="display-4 text-center mb-5">Band Photos</h1>
      <div className="row">
        {photos.map((photo) => (
          <div
            key={photo.sys.id}
            className="d-flex justify-content-center flex-column col-12 col-md-6 col-lg-4 px-3"
          >
            <div className="d-block mb-2">
              <img
                src={"https:" + photo.fields.imageSource.fields.file.url}
                alt={photo.fields.altText}
              />
            </div>
            <p className="mb-5">{photo.fields.caption}</p>
          </div>
        ))}
      </div>
      <style jsx="true">{`
        img {
          max-height: 15rem;
          max-width: 100%;
          width: auto;
          height: auto;
        }
      `}</style>
    </main>
  );
}
