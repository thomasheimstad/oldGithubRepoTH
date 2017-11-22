import React from "react";
import Link from "gatsby-link";

class CategoryListing extends React.Component {
  getcategoryList() {
    let categoryList = new Set();
    this.props.postEdges.forEach(postEdge => {
      categoryList.add(postEdge.node.frontmatter.category);
    });
    let toArray = [];
    let tezt = () => {for (const x of categoryList) { toArray.push(x) };}
    tezt();
    return toArray.sort();
  }
  render() {
    const categoryLiszt = this.getcategoryList();
    return (
      <div className="see? categoryView flex center row wrap">
        {/* Your post list here. */
        categoryLiszt.map((item,i) =>
          <div className="flex wrap column">
            <Link to={ item.replace(" ", "-")} key={i} className="flex column">
              <h3 style={{textTransform: "capitalize"}}>{item}</h3>
            </Link>
          </div>
          )
        }
      </div>
    );
  }
}
export default CategoryListing;
