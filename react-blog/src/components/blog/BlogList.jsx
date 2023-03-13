import React from "react";
import ListItem from "./ListItem";

const DUMMY_DATA = [
  {
    id: "c1",
    title: "Comment 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aut nisi quia dolorem deserunt soluta officia, minima odit repudiandae qui placeat, molestiae ipsam optio perferendis ducimus. Dolore accusamus veniam laudantium",
  },
  {
    id: "c2",
    title: "Comment 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aut nisi quia dolorem deserunt soluta officia, minima odit repudiandae qui placeat, molestiae ipsam optio perferendis ducimus. Dolore accusamus veniam laudantium",
  },
  {
    id: "c3",
    title: "Comment 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aut nisi quia dolorem deserunt soluta officia, minima odit repudiandae qui placeat, molestiae ipsam optio perferendis ducimus. Dolore accusamus veniam laudantium",
  },
  {
    id: "c4",
    title: "Comment 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aut nisi quia dolorem deserunt soluta officia, minima odit repudiandae qui placeat, molestiae ipsam optio perferendis ducimus. Dolore accusamus veniam laudantium",
  },
];

const BlogList = () => {
  const comments = DUMMY_DATA.map((comment) => {
    return (
      <ListItem
        key={comment.id}
        titleProp={comment.title}
        descriptionProp={comment.description}
      />
    );
  });
  return <ul>{comments}</ul>;
};

export default BlogList;
