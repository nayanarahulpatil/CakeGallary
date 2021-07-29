
export function Addcackedetails() {
   
    return (
        <>
            <div className="container bg-dark my-1">
                <div className="d-flex text-light">
                    <div className="w-75 mx-auto ">
                        <div className="text-center my-5">
                            <h1 className="font-weight-bold" >Add Cake Details</h1>
                        </div>
                        <form >
                            <div className="form-group">
                                <label for="exampleInputEmail1" >Product Image :</label>
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input type="file" name="files[]"  className="custom-file-input form-control" id="customFile"  />
                                        <label className="custom-file-label" for="customFile"></label>
                                    </div>
                                    <button type="submit" className="btn btn-primary ml-2">Upload</button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1"  >Cake Name :</label>
                                <input type="text" className="form-control border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your cake name" />

                            </div>
                            <div className="form-group mt-5">
                                <div className="input-group">
                                    <label for="exampleInputEmail1"  >Price :</label>
                                    <input type="number" className="form-control rounded mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your cake price" />
                                    <label for="exampleInputEmail1"  >Weight :</label>
                                    <input type="number" className="form-control rounded mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your cake weight" />
                                    <span className="align-items-center justify-content-center">Kg</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Address :</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your address" />
                            </div>
                            <div className="form-group  mt-5">
                                <div className="input-group">
                                    <label for="exampleFormControlSelect2">Type :</label>
                                    <select className="form-control rounded ml-2 " id="exampleFormControlSelect2">
                                        <option>Select cake type</option>
                                        <option>Friut</option>
                                        <option>choclate</option>
                                        <option>lava</option>
                                        <option>white forest</option>
                                    </select>

                                    <div className="form-check form-check-inline ml-5">
                                        <label className="form-check-label" for="inlineCheckbox1">Eggeless :</label>
                                        <input className="form-check-input ml-2" type="checkbox" id="inlineCheckbox1" value="option1" />

                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1"  >Flavour :</label>
                                <input type="text" className="form-control border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your cake Flavour" />

                            </div>
                            <div className="form-group">
                            <button type="submit" className="btn btn-primary my-5">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}