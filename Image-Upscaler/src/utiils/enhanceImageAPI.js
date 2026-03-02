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

const PollForEnhnacedImage = async (taskID, retries = 0) => {
  const result = await FetchEnhancedImage(taskID);

  if (result.status === 4) {
    console.log(`Processing......`);

    if (retries >= 10) {
      throw new Error(`Max Limit Reach Please try agian Later`);
    }

    await Promise((resolve) => setTimeout(resolve, 2000));

    return PollForEnhanacedImage(taskID, retries + 1);
  }
};
