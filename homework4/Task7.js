function validateObject(obj, schema) {
    for (const key in schema) {
      const rule = schema[key];
  
      if (rule.required && !(key in obj)) return false;
  
      if (key in obj && typeof obj[key] !== rule.type) return false;
      
    }
  
    return true;
}
  
//TEst -----------------------------
/*
const simpleSchema = {
    name: { type: "string", required: true },
    age: { type: "number", required: true },
    email: { type: "string", required: false }
  };
  
  const valid = {
    name: "Alice",
    age: 28,
    email: "alice@example.com"
  };
  
  const invalid = {
    name: "Bob",
    age: "not-a-number"  
  };
  
  console.log(validateObject(valid, simpleSchema));   
  console.log(validateObject(invalid, simpleSchema)); 
  */