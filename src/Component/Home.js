import {Navbar} from '../Component/Navbar';
import {Carousel} from '../Component/Carousel';
import { Cakelist } from './Cakelist';

export function Home(props){
  console.log(props.checklogindone);
    return(
        <>
        <Navbar loginstatus= {props.checklogindone} ></Navbar>
        <Carousel></Carousel>
        <Cakelist history={props.history}></Cakelist>
        </>
    );
}