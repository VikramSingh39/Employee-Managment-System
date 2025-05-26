const employee = [
      {
        id: 1,
        email: "employee1@example.com",
        password: "124",
        tasks: [
          {
            title: "Design login page",
            description: "Create a responsive login page UI",
            date: "2025-04-24",
            category: "design",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Fix login bug",
            description: "Resolve issue with authentication state",
            date: "2025-04-23",
            category: "development",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Write unit tests",
            description: "Add tests for user services",
            date: "2025-04-22",
            category: "testing",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      },
      {
        id: 2,
        email: "employee2@example.com",
        password: "124",
        tasks: [
          {
            title: "Update employee table",
            description: "Add email column and sorting feature",
            date: "2025-04-22",
            category: "development",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Deploy backend API",
            description: "Push backend service to Vercel",
            date: "2025-04-21",
            category: "devops",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Document API endpoints",
            description: "Write Swagger docs for all endpoints",
            date: "2025-04-23",
            category: "documentation",
            active: true,
            newTask: false,
            completed: false,
            failed: false
          },
          {
            title: "Fix table overflow",
            description: "Fix UI overflow issue on small screens",
            date: "2025-04-24",
            category: "bugfix",
            active: false,
            newTask: true,
            completed: false,
            failed: false
          }
        ]
      },
      {
        id: 3,
        email: "employee3@example.com",
        password: "124",
        tasks: [
          {
            title: "Create dashboard view",
            description: "Develop analytics dashboard page",
            date: "2025-04-20",
            category: "design",
            active: true,
            newTask: false,
            completed: false,
            failed: false
          },
          {
            title: "Optimize images",
            description: "Compress and lazy-load images",
            date: "2025-04-22",
            category: "performance",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Test deployment",
            description: "Verify deployed site functions properly",
            date: "2025-04-23",
            category: "testing",
            active: false,
            newTask: true,
            completed: false,
            failed: false
          }
        ]
      },
      {
        id: 4,
        email: "employee4@example.com",
        password: "124",
        tasks: [
          {
            title: "Build profile component",
            description: "Add user profile and avatar upload",
            date: "2025-04-22",
            category: "frontend",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Set up Firestore",
            description: "Configure Firestore for task storage",
            date: "2025-04-21",
            category: "database",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Write README",
            description: "Create a project README for GitHub",
            date: "2025-04-19",
            category: "documentation",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      },
      {
        id: 5,
        email: "employee5@example.com",
        password: "124",
        tasks: [
          {
            title: "Integrate Stripe",
            description: "Add payment gateway integration",
            date: "2025-04-20",
            category: "integration",
            active: true,
            newTask: false,
            completed: false,
            failed: false
          },
          {
            title: "Implement dark mode",
            description: "Toggle dark/light theme",
            date: "2025-04-23",
            category: "frontend",
            active: false,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Email notifications",
            description: "Enable task notifications by email",
            date: "2025-04-22",
            category: "feature",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          }
        ]
      }
    ]

const admin = [{
      "id": 1,
      "email": "admin@example.com",
      "password": "124"
    }]

export const setLocalStorage = ()=>{
    localStorage.setItem('employee', JSON.stringify(employee))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
const employee = JSON.parse(localStorage.getItem('employee'));
const admin = JSON.parse(localStorage.getItem('admin'));
 return{employee,admin}
}