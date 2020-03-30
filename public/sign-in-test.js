const token =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUzYzY2YWFiNTBjZmRkOTFhMTQzNTBhNjY0ODJkYjM4MDBjODNjNjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5MTMwOTczMTkyMDk0NDY0MDYxIiwiaGQiOiJpbnRlbGxpc3lzLmNvbS5kbyIsImVtYWlsIjoibXNpZXJyYUBpbnRlbGxpc3lzLmNvbS5kbyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiNWloZXFqRnY3UjQ5S1JScE9IUzNxQSIsImlhdCI6MTU4NTM1MDMzOCwiZXhwIjoxNTg1MzUzOTM4fQ.RoREII-Z0_cIr1xUdHMYCFggZmiMOMPbpQbS2TFUVIKNpTl7ldFmYu2D_gA8v_o_qu_N777POm03z0UTVZbw2liGxs8aS3C0rr_X61w3izPK8xX2mCxhEILxO03WD9Id-wnz60fv04aQPNthjp5KWp7PRGZC7l2ETJxfCqEYac3_E15HykXC-JDh9k2ednnruazH-vVHfft_GsyE35IEqZ0YlIzu77vOYZzKG0yc5bwy0dVGWMkNTmWkcRj2i_PNWKk2T-0F-74FCBO3iEJIWBukSbEqAepW4WCQaLmJJFhCxPhY06cFPWR6jhaJZrxr5v8D-nHWNRCVGvhglBiWQg";

async function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();

  console.log(`User's token id:`)
  console.log(googleUser.uc.id_token);
  // console.log("ID: " + profile.getId());
  // console.log("Name: " + profile.getName());
  // console.log("Image URL: " + profile.getImageUrl());
  // console.log("Email: " + profile.getEmail());
}

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log("User signed out.");
  });
}

// 19841981619-hejotmcejfjfhd7cq87cm1cm755u6jps.apps.googleusercontent.com metrics client id

const btn = document.getElementById("function-1");
btn.addEventListener("click", async () => {
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { Authorization: `Bearer ${token}` }
  };

  const res = await fetch(
    "https://us-central1-metricas-239920.cloudfunctions.net/function-1",
    options
  );
  const data = await res.json();
  console.log(data);
});
