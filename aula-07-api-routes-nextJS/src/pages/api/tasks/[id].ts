import TaskModel from "@/models/task";
import MongoConnect from "@/services/mongodb";
import { NextApiHandler } from "next";

type TaskType = {
  name: string;
};

type ParamsType = {
  id: string;
};

type BodyType = {
  name: string;
};

MongoConnect();

async function getTaskById(id: string) {
  const tasks = await TaskModel.findById(id);

  return tasks;
}

async function updateTask(id: string, body: TaskType) {
  const response = await TaskModel.findByIdAndUpdate({ _id: id }, body);

  return response;
}

async function deleteTask(id: string) {
  const response = await TaskModel.findByIdAndDelete(id);
  console.log(response);

  return true;
}

const handler: NextApiHandler = async (request, response) => {
  const method = request.method;
  const body = request.body as BodyType;
  const { id } = request.query as ParamsType;

  let result;

  switch (method) {
    case "GET":
      result = await getTaskById(id);
      break;

    case "PUT":
      result = await updateTask(id, body);
      break;

    case "DELETE":
      result = await deleteTask(id);
      break;

    default:
      console.log("Method not allowed");
  }

  return response.json(result);
};

export default handler;
