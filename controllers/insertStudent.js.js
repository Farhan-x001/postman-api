



/*const studentSchema = {
  StudentID: "S001",
  FirstName: "John",
  LastName: "Doe",
  DateOfBirth: new Date("1995-04-15"),
  Email: "john.doe@example.com",
  Phone: "555-123-4567",
  DepartmentID: 1,
  // Other relevant student information fields
};

async function insertStudent() {
  const uri = "mongodb+srv://Farhan:Masoor7812@cluster0.vcbhr5b.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB Atlas URI
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("student");
    const studentsCollection = database.collection("students");
    await studentsCollection.insertOne(studentSchema);
    console.log("Student inserted successfully");
  } finally {
    client.close();
  }
}

insertStudent().catch(console.error);
*/