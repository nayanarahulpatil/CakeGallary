import Navbar from '../Component/Navbar';
import {Carousel} from '../Component/Carousel';
import  Cakelist  from './Cakelist';
import Loader from "react-loader-spinner"

export function Home(props){
    return(
        <>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Cakelist history={props.history}></Cakelist>
        </>
    );
}