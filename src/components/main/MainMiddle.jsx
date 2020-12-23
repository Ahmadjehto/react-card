import React from "react";
import Card from "../card/Card";
import ENTRY_LIST from "../../data/entry-list";

function MainMiddle() {
  const CardComponent = ENTRY_LIST.map((item, index) => (
    <Card imgUrl={item.imgUrl} body={item.body} like={item.like} id={index} />
  ));
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {CardComponent}
        </div>
      </div>
    </div>
  );
}

export default MainMiddle;
