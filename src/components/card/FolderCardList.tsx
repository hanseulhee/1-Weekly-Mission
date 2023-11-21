import Card from "components/card/Card";

interface Props {
  links?: FolderLinks[];
}

function FolderCardList({ links }: Props) {
  return (
    <>
      {links?.map((link) => (
        <Card
          key={link.id}
          url={link.url}
          description={link.description}
          createdAt={link.createdAt}
          imageSource={link.imageSource}
        />
      ))}
    </>
  );
}

export default FolderCardList;
