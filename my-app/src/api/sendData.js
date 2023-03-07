export default function SendData(data) {
  console.log(data);
  const { name, email, message } = data;
  const formData = {
    form_id: 16,
    form_data: {
      15: { field_name: "Name", field_value: name, field_type: "text" },
      2: {
        field_name: "Email",
        field_value: email,
        field_type: "email",
      },
      3: {
        field_name: "Comments",
        field_value: message,
        field_type: "textarea",
      },
    },
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(
    "https://ary-weevil-bojo.gravitydemo.com/wp-json/weboforms/v1/test",
    requestOptions
  ).then((response) => response.json());
}
