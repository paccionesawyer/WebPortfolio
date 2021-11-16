import React, { useState } from "react";
import Nav from "./BlogNav";
import ModalOneBlogContent from "./modal/ModalOneBlogContent"
import Modal from "react-modal";

const styles = {
  padding: "10px",
  margin: "5px",
  background: "lightgreen",
  width: "100px",
  height: "100px",
  display: "inline-block"
};



const Blogs = () => {

  const [isOpen, setIsOpen]   = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  const blogContent = [
    {
        type: "dog",
        id: "1",
        file: <ModalOneBlogContent />,
        isOpen: false,
        toggle: toggleModalOne
    },
    {
        type: "dog",
        id: "2",
        file: <ModalOneBlogContent />,
        toggle: toggleModalTwo
    }
];

  const data = ["dog", "cat", "lizard", "dog", "cat", "dog", "lizard", "dog"];
  const [filter, setFilter] = useState("all");

  function filterTags(val) {
    setFilter(val);
  }
  return (
    <div className="App">
      <Nav filter={filter} setFilter={filterTags} />
      {blogContent.map(list =>
        filter === list.type || filter === "all" ? (
            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                <article className="post-container" onClick={list.toggle}>
                    <div className="post-thumb">
                        <div className="d-block position-relative overflow-hidden">
                        <img
                            src="img/blog/blog-post-1.jpg"
                            className="img-fluid"
                            alt="Blog Post"
                        />
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="entry-header">
                        <h3>How to Own Your Audience by Creating an Email List</h3>
                        </div>
                        <div className="entry-content open-sans-font">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore...
                        </p>
                        </div>
                    </div>
                </article>
                <Modal
                    isOpen={list.isOpen}
                    onRequestClose={list.toggle}
                    contentLabel="My dialog"
                    className="custom-modal dark"
                    overlayClassName="custom-overlay dark"
                    closeTimeoutMS={500}
                >
                    <div>
                        <button className="close-modal" onClick={list.toggle}>
                        <img src="/img/cancel.svg" alt="close icon" />
                        </button>
                        {/* End close icon */}

                        <div className="box_inner blog-post">
                        <ModalOneBlogContent />
                        </div>
                    </div>
                </Modal>
            </div>
        ) : null
      )}
    </div>
  );
}

export default Blogs;