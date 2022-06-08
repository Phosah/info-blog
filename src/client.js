import sanityClient from "@sanity/client";
export default sanityClient({
  projectId: "8eee43qw",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});
