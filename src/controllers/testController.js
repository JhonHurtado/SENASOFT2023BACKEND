import TestModel from "../models/testModel.js";

export const createTest = async (req, res) => {
  try {
    const data = req.body;
    const test = new TestModel(data);
    await test.save();
    res.status(200).json({ message: "test created successfully", test });
  } catch (error) {
    res.status(500).json({ message: "unable to register test", error });
  }
};

export const getTests = async (req, res) => {
  try {
    const testsFound = await TestModel.find();
    if (!testsFound) {
      res.status(200).json({ message: "tests empty", testsFound });
    }
    res.status(200).json({ message: "tests found", testsFound });
  } catch (error) {
    res.status(500).json({ message: "unable to get tests", error });
  }
};

export const getTest = async (req, res) => {
  try {
    const { id } = req.params;
    const testFound = await TestModel.findById(id);
    if (!testFound) {
      res.status(200).json({ message: "test not found", testFound });
    }
    res.status(200).json({ message: "test found", testFound });
  } catch (error) {
    res.status(500).json({ message: "unable to get test", error });
  }
};

export const updateTest = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const updatedtest = await TestModel.updateOne(
      { _id: id },
      { $set: { ...data } }
    );
    res.status(200).json({ message: "test updated successfully", updatedtest });
  } catch (error) {
    res.status(500).json({ message: "unable to update test", error });
  }
};

export const deleteTest = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedtest = await TestModel.findByIdAndDelete(id);
    res.status(200).json({ message: "test deleted successfully", deletedtest });
  } catch (error) {
    res.status(500).json({ message: "unable to delete test", error });
  }
};
