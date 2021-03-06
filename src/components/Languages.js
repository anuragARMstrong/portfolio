import React from 'react';

export default function Languages() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Language</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="language-experience">
              <h3 className="h5">
                English <small>Intermediate</small>
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="language-experience">
              <h3 className="h5">
                Hindi <small>Fluent</small>
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="language-experience">
              <h3 className="h5">
                Urdu <small>Beginner</small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
