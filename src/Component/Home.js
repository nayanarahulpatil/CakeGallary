import {Navbar} from '../Component/Navbar';
import {Carousel} from '../Component/Carousel';
import { Cakelist } from './Cakelist';

export function Home(props){
  
    return(
        <>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Cakelist history={props.history}></Cakelist>
        </>
    );
}