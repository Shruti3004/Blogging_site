import { Card } from '@arco-design/web-react';
const { Meta } = Card;

const Articles = () => {
  return (
    <Card
      hoverable
      style={{ width: 360 }}
      cover={
        <div style={{ height: 204, overflow: "hidden" }}>
          <img
            style={{ width: "100%", transform: "translateY(-20px)" }}
            alt="dessert"
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </div>
      }
    >
      <Meta
        title="Card Title"
        description={
          <>
            Card content <br /> Card content
          </>
        }
      />
    </Card>
  );
};

export default Articles;
