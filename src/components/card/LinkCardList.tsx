import Card from "components/card/Card";

function LinkCardList({
  id,
  url,
  description,
  created_at,
  image_source,
}: Link) {
  return (
    <>
      <Card
        key={id}
        url={url}
        description={description}
        createdAt={created_at}
        imageSource={image_source}
      />
    </>
  );
}

export default LinkCardList;
