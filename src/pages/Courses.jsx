import React from "react";

const Courses = () => {
  return (
    <>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Courses</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Courses</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">List of Courses</h3>

                    <div class="card-tools">
                      <div class="input-group input-group-sm">
                        <input
                          type="text"
                          name="table_search"
                          class="form-control float-right"
                          placeholder="Search"
                        />

                        <div class="input-group-append">
                          <button type="submit" class="btn btn-default">
                            <i class="fas fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body table-responsive p-0">
                    <table class="table table-head-fixed text-nowrap">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Course Title</th>
                          <th>Date Initiated</th>
                          <th>Status</th>
                          <th>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>183</td>
                          <td>John Doe</td>
                          <td>11-7-2009</td>
                          <td>
                            <span class="tag tag-success">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>219</td>
                          <td>Alexander Pierce</td>
                          <td>11-7-2009</td>
                          <td>
                            <span class="tag tag-warning">Pending</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>657</td>
                          <td>Bob Doe</td>
                          <td>11-7-2009</td>
                          <td>
                            <span class="tag tag-primary">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>175</td>
                          <td>Mike Doe</td>
                          <td>11-7-2009</td>
                          <td>
                            <span class="tag tag-danger">Denied</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>134</td>
                          <td>Jim Doe</td>
                          <td>11-7-2009</td>
                          <td>
                            <span class="tag tag-success">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>494</td>
                          <td>Victoria Doe</td>
                          <td>11-7-2009</td>
                          <td>
                            <span class="tag tag-warning">Pending</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>832</td>
                          <td>Michael Doe</td>
                          <td>11-7-2009</td>
                          <td>
                            <span class="tag tag-primary">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>982</td>
                          <td>Rocky Doe</td>
                          <td>11-7-2009</td>
                          <td>
                            <span class="tag tag-danger">Denied</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;
