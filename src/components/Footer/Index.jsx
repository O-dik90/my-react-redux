import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter} from "react-icons/bs"
import {SiGmail,SiTelegram} from "react-icons/si"

export default function Footer() {
  return (
    <div className="container-fluid mt-5" style={{ backgroundColor: "#3e4551" }}> 
      <footer className="text-center text-lg-start text-white" >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">FOOTER CONTENT</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae modi cum ipsam ad, illo possimus laborum ut
                  reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                  Reiciendis assumenda iusto sapiente inventore animi?
                </p>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 4</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <hr className="mb-4" />
          <section className="text-center">
            <a className="mx-2" href="#!"><BsFacebook size={28}/></a>
            <a className="mx-2" href="#!"><SiGmail size={28}/></a>
            <a className="mx-2" href="#!"><BsInstagram size={28}/></a>
            <a className="m-2" href="#!"><BsTwitter size={28}/></a>
            <a className="m-2" href="#!"><SiTelegram size={28}/></a>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  )
}
