import React from "react";

const AddCourses = () => {
  return (
    <>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Add Course</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Add Course</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="row">
            <div class="col-md-6">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">General</h3>

                  <div class="card-tools">
                    <button
                      type="button"
                      class="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" id="inputName" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="inputDescription">About</label>
                    <textarea
                      id="inputDescription"
                      class="form-control"
                      rows="4"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="inputStatus">Status</label>
                    <select id="inputStatus" class="form-control custom-select">
                      <option selected disabled>
                        Select one
                      </option>
                      <option>On Hold</option>
                      <option>Canceled</option>
                      <option>Success</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="inputClientCompany">Department</label>
                    <input
                      type="text"
                      id="inputClientCompany"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <a href="#" class="btn btn-secondary">
                Cancel
              </a>
              <input
                type="submit"
                value="Create new Porject"
                class="btn btn-success float-right"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddCourses;
