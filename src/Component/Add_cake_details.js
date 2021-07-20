
export function Addcackedetails() {
   
    return (
        <>
            <div class="container bg-dark my-1">
                <div class="d-flex text-light">
                    <div class="w-75 mx-auto ">
                        <div class="text-center my-5">
                            <h1 class="font-weight-bold" >Add Cake Details</h1>
                        </div>
                        <form >
                            <div class="form-group">
                                <label for="exampleInputEmail1" >Product Image :</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" name="files[]"  class="custom-file-input form-control" id="customFile"  />
                                        <label class="custom-file-label" for="customFile"></label>
                                    </div>
                                    <button type="submit" class="btn btn-primary ml-2">Upload</button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1"  >Cake Name :</label>
                                <input type="text" class="form-control border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your cake name" />

                            </div>
                            <div class="form-group mt-5">
                                <div class="input-group">
                                    <label for="exampleInputEmail1"  >Price :</label>
                                    <input type="number" class="form-control rounded mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your cake price" />
                                    <label for="exampleInputEmail1"  >Weight :</label>
                                    <input type="number" class="form-control rounded mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your cake weight" />
                                    <span class="align-items-center justify-content-center">Kg</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Address :</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your address" />
                            </div>
                            <div class="form-group  mt-5">
                                <div class="input-group">
                                    <label for="exampleFormControlSelect2">Type :</label>
                                    <select class="form-control rounded ml-2 " id="exampleFormControlSelect2">
                                        <option>Select cake type</option>
                                        <option>Friut</option>
                                        <option>choclate</option>
                                        <option>lava</option>
                                        <option>white forest</option>
                                    </select>

                                    <div class="form-check form-check-inline ml-5">
                                        <label class="form-check-label" for="inlineCheckbox1">Eggeless :</label>
                                        <input class="form-check-input ml-2" type="checkbox" id="inlineCheckbox1" value="option1" />

                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1"  >Flavour :</label>
                                <input type="text" class="form-control border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your cake Flavour" />

                            </div>
                            <div class="form-group">
                            <button type="submit" class="btn btn-primary my-5">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}