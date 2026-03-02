const APIKEY = "KUCJ";
const BASEURL = "sdf";
export const enhancedImageAPI = async (file) => {
  try {
    const taskID = UploadImage(file);

    const EnhnacedImageData = FetchEnhancedImage(taskID);
  } catch (error) {
    console.log(error);
  }
};

const UploadImage = async (file) => {
  const formData = new formData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASEURL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": APIKEY,
      },
    },
  );

  if (!data?.data?.taskID) {
    throw new Error(`Failed to Upload Image`);
  }
  return data.data.task_id;
};
const FetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASEURL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "x-api-key": APIKEY,
      },
    },
  );
  return data.data.image;
};
