import React, { Component } from "react";
import { Provider } from "react-redux";
import "../styles/index.scss";
import BoxCircle from "../containers/utils/BoxCircle";
import Box1 from "../components/Box1";
import Box2 from "../components/Box2";
import Box3 from "../components/Box3";
import Box4 from "../components/Box4";
import Box5 from "../components/Box5";
import Box6 from "../components/Box6";
import Box7 from "../components/Box7";
import Box8 from "../components/Box8";
import Box9 from "../components/Box9";
import Box10 from "../components/Box10";
import Header from "../components/Header";
import Footer from "../components/Footer";
class App extends Component {
  render() {
    return (
        <div className="container container-background">
          <div>
            <Header />
          </div>
          <div className="row ">
            <div className=" col-12">
              <Box1 title="#1" bgColor="bg-blue" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <Box2
                title="#2"
                contentTitle="Established TMAsia in Singapore"
                bgColor="bg-green"
              />

              <Box4 title="#4" bgColor="bg-yellow" />
            </div>
            <div className="box-3 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <Box3
                title="#3"
                bgColor="bg-middle-blue"
                contentTitle="Established TMA Bình Định"
              />
            </div>
          </div>
          <div className="row ">
            <div className="box-5 col-12">
              <Box5
                title="#5"
                bgColor="bg-blue"
                contentTitle="Established TMA Blockchain Development Center"
              />
            </div>
          </div>
          <div className="row ">
            <div className=" col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Box6
                title="#6"
                contentTitle="Established TMA DevOps Service Center"
                bgColor="bg-green"
              />
            </div>
            <div className=" col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Box7
                title="#7"
                contentTitle="Applied new management model"
                bgColor="bg-middle-blue"
              />
            </div>
          </div>
          <div className="row ">
            <div className="box-8 col-12">
              <Box8 title="#8" bgColor="bg-yellow" />
            </div>
          </div>
          <div className="row ">
            <div className=" col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Box9
                title="#9"
                contentTitle="Effective Student Development Program"
                bgColor="bg-blue"
              />
            </div>
            <div className=" col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Box10 title="#10" bgColor="bg-middle-blue" />
            </div>
          </div>
          <Footer />
        </div>
       
     
    );
  }
}
export default App;
