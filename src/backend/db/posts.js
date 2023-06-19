import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "2da09c9f-11ef-447c-96d7-d2e993d6ebcf",
    content:
      "A founder gave an employee 10 days off since Employee was not taking rest even though he was ill.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sagar@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: "4adf49d2-70c5-4877-b3f8-8d69ab80fa4e",
        username: "henry@example.com",
        text: "That's amazing",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "d3b6ad7f-eb3b-4d89-89aa-c87ddc44f95f",
    content:
      "A manager organized a team-building retreat to improve collaboration among employees.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "70a991c8-8884-457a-9b4c-47534efbf5fb",
          bookmarks: [],
          firstName: "Bob",
          lastName: "Davis",
          username: "bob@example.com",
          password: "bob123",
          userHandler: "bobdavis",
          bio: "Tech geek and problem solver",
          link: "https://peerlist.io/bobdavis",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "john@example.com",
    bookmark: [],
    comments: [
      {
        _id: "6af8baca-f517-4af7-ba7d-db965898112c",
        username: "emma@example.com",
        text: "I wish my manager did that!",
      },
      {
        _id: "18dd6166-d807-4d3e-ba7e-d9d8ae03a2a5",
        username: "grace@example.com",
        text: "Team-building activities are so much fun.",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "e8e618f3-36d9-44ea-a208-68a739feb156",
    content:
      "An employer provided flexible working hours for a working parent to accommodate childcare responsibilities.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "david@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "4d5350e6-6b47-4170-b3d8-c7dd167d231d",
    content:
      "A CEO recognized an employee's exceptional performance with a promotion and a pay raise.",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "70a991c8-8884-457a-9b4c-47534efbf5fb",
          bookmarks: [],
          firstName: "Bob",
          lastName: "Davis",
          username: "bob@example.com",
          password: "bob123",
          userHandler: "bobdavis",
          bio: "Tech geek and problem solver",
          link: "https://peerlist.io/bobdavis",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "934ea419-311d-4d9a-8e38-675f2e80d81f",
          bookmarks: [],
          firstName: "Charlie",
          lastName: "Wilson",
          username: "charlie@example.com",
          password: "charlie123",
          userHandler: "charliewilson",
          bio: "Business strategist and entrepreneur",
          link: "https://peerlist.io/charliewilson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "b7d855c4-e33a-4093-80bd-1d9a7fcf932d",
          bookmarks: [],
          firstName: "David",
          lastName: "Taylor",
          username: "david@example.com",
          password: "david123",
          userHandler: "davidtaylor",
          bio: "Finance professional with a knack for numbers",
          link: "https://peerlist.io/davidtaylor",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "john@example.com",
    bookmark: [],
    comments: [
      {
        _id: "2a775d90-e33e-41f0-8af2-00f2f7d3e0a4",
        username: "emily@example.com",
        text: "Congratulations on the promotion!",
      },
      {
        _id: "07af9e47-bd3d-4515-af55-a3fe5241bcf1",
        username: "grace@example.com",
        text: "Hard work pays off.",
      },
      {
        _id: "d16c74f8-bf9e-4d90-8378-9214138ad0de",
        username: "henry@example.com",
        text: "Well-deserved promotion!",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "47f7db35-0b9c-488d-bd3d-01caefd5259d",
    content:
      "A manager granted an employee a sabbatical to pursue their passion project.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "alice@example.com",
    bookmark: [],
    comments: [
      {
        _id: "96c87680-88a2-41ce-ad84-07ae9df19be6",
        username: "grace@example.com",
        text: "That's a dream come true!",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "c2d3aec5-ceb8-4ca8-a6dd-987d5d33e803",
    content:
      "An employer sponsored an employee's participation in a professional development conference.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
          bookmarks: [],
          firstName: "Henry",
          lastName: "Smith",
          username: "henry@example.com",
          password: "henry123",
          userHandler: "henrysmith",
          bio: "Marketing professional with a creative edge",
          link: "https://peerlist.io/henrysmith",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Sagar",
              lastName: "Shah",
              username: "sagar@gmail.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
          ],
          followers: [
            {
              firstName: "Sagar",
              lastName: "Shah",
              username: "sagar@gmail.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "bob@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "7c57a310-d4f3-4500-babc-b3f98ae222cc",
    content:
      "A founder personally mentored an employee to enhance their skills and career growth.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "64cd8323-896e-4f87-82f0-c4738106b70c",
          bookmarks: [],
          firstName: "Grace",
          lastName: "Miller",
          username: "grace@example.com",
          password: "grace123",
          userHandler: "gracemiller",
          bio: "HR professional with a passion for employee well-being",
          link: "https://peerlist.io/gracemiller",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "charlie@example.com",
    bookmark: [],
    comments: [
      {
        _id: "8d087025-3520-43e5-b22b-1b3ac29ff4fd",
        username: "henry@example.com",
        text: "That's exceptional leadership!",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "95ab3946-f0d8-40de-a40d-a945a7e252da",
    content:
      "An employer implemented a work-from-home policy to improve work-life balance for employees.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
        {
          _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
          bookmarks: [],
          firstName: "Frank",
          lastName: "Brown",
          username: "frank@example.com",
          password: "frank123",
          userHandler: "frankbrown",
          bio: "Entrepreneur and startup enthusiast",
          link: "https://peerlist.io/frankbrown",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
            {
              firstName: "Bob",
              lastName: "Davis",
              username: "bob@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
            },
            {
              firstName: "Charlie",
              lastName: "Wilson",
              username: "charlie@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "david@example.com",
    bookmark: [],
    comments: [
      {
        _id: "3065cc57-6b01-470c-82f8-975b1e068a89",
        username: "grace@example.com",
        text: "Remote work is the future.",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "f3d65bb7-ecec-42f7-b11a-1061868af494",
    content:
      "A manager organized a team lunch to celebrate the successful completion of a project.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "bob@example.com",
    bookmark: [],
    comments: [
      {
        _id: "1a183575-770d-46bb-97cb-3690d2c7da31",
        username: "frank@example.com",
        text: "Food and success go well together!",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "0c2fd14b-3449-4759-b3e5-d4c2068f6542",
    content:
      "An employer sponsored a volunteer activity for employees to give back to the community.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "64cd8323-896e-4f87-82f0-c4738106b70c",
          bookmarks: [],
          firstName: "Grace",
          lastName: "Miller",
          username: "grace@example.com",
          password: "grace123",
          userHandler: "gracemiller",
          bio: "HR professional with a passion for employee well-being",
          link: "https://peerlist.io/gracemiller",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "charlie@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "bdefe41b-9038-4a95-b73c-8460a09424f7",
    content:
      "A CEO personally recognized an employee's effort with a handwritten thank-you note.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "frank@example.com",
    bookmark: [],
    comments: [
      {
        _id: "052c094b-a9cc-4dd2-83e5-8707bda7f7a6",
        username: "henry@example.com",
        text: "Small gestures make a big impact.",
      },
      {
        _id: "83aaa639-e329-4893-ad68-8daa582f584f",
        username: "grace@example.com",
        text: "It's the thought that counts.",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "c509053a-a64e-4287-8161-e4e81801d40f",
    content:
      "A manager provided a training budget for employees to attend professional development courses.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
          bookmarks: [],
          firstName: "Henry",
          lastName: "Smith",
          username: "henry@example.com",
          password: "henry123",
          userHandler: "henrysmith",
          bio: "Marketing professional with a creative edge",
          link: "https://peerlist.io/henrysmith",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Sagar",
              lastName: "Shah",
              username: "sagar@gmail.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
          ],
          followers: [
            {
              firstName: "Sagar",
              lastName: "Shah",
              username: "sagar@gmail.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "emma@example.com",
    bookmark: [],
    comments: [
      {
        _id: "fd70a16b-636c-47ee-9add-fd27e354c8fb",
        username: "alice@example.com",
        text: "Investing in employees is key to growth.",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "cfbe7824-6255-4108-b550-bfd022d3123a",
    content:
      "An employer offered a wellness program with gym memberships and mental health resources.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "70a991c8-8884-457a-9b4c-47534efbf5fb",
          bookmarks: [],
          firstName: "Bob",
          lastName: "Davis",
          username: "bob@example.com",
          password: "bob123",
          userHandler: "bobdavis",
          bio: "Tech geek and problem solver",
          link: "https://peerlist.io/bobdavis",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
          bookmarks: [],
          firstName: "Frank",
          lastName: "Brown",
          username: "frank@example.com",
          password: "frank123",
          userHandler: "frankbrown",
          bio: "Entrepreneur and startup enthusiast",
          link: "https://peerlist.io/frankbrown",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
            {
              firstName: "Bob",
              lastName: "Davis",
              username: "bob@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
            },
            {
              firstName: "Charlie",
              lastName: "Wilson",
              username: "charlie@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "grace@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "5c984e2a-af8d-4359-a93f-7e71dab78a1a",
    content:
      "A founder organized a company-wide retreat to celebrate achieving annual goals.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "28d6d81b-16fb-403d-a450-6d757c2f477e",
          bookmarks: [],
          firstName: "Henry",
          lastName: "Smith",
          username: "henry@example.com",
          password: "henry123",
          userHandler: "henrysmith",
          bio: "Marketing professional with a creative edge",
          link: "https://peerlist.io/henrysmith",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Sagar",
              lastName: "Shah",
              username: "sagar@gmail.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
          ],
          followers: [
            {
              firstName: "Sagar",
              lastName: "Shah",
              username: "sagar@gmail.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "alice@example.com",
    bookmark: [],
    comments: [
      {
        _id: "968ea307-59ef-4baf-b6bd-bbc6787e7baa",
        username: "bob@example.com",
        text: "That's a great way to foster team spirit.",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "7dad3e75-a001-4273-972d-83eb6c12cc28",
    content:
      "An employer introduced a profit-sharing program to reward employees for their contributions.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
        {
          _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
          bookmarks: [],
          firstName: "Frank",
          lastName: "Brown",
          username: "frank@example.com",
          password: "frank123",
          userHandler: "frankbrown",
          bio: "Entrepreneur and startup enthusiast",
          link: "https://peerlist.io/frankbrown",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
            {
              firstName: "Bob",
              lastName: "Davis",
              username: "bob@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
            },
            {
              firstName: "Charlie",
              lastName: "Wilson",
              username: "charlie@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "bob@example.com",
    bookmark: [],
    comments: [
      {
        _id: "84813043-d5cc-4bbf-a8a3-3429873237b3",
        username: "grace@example.com",
        text: "Incentives motivate employees to perform better.",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "30496488-8a0d-416a-a44a-d3ed562937f4",
    content:
      "A manager implemented a mentorship program to support employees' career development.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "64cd8323-896e-4f87-82f0-c4738106b70c",
          bookmarks: [],
          firstName: "Grace",
          lastName: "Miller",
          username: "grace@example.com",
          password: "grace123",
          userHandler: "gracemiller",
          bio: "HR professional with a passion for employee well-being",
          link: "https://peerlist.io/gracemiller",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "charlie@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "0c2431bb-e391-41ee-b46e-f82a53c637ab",
    content:
      "An employer sponsored an employee's participation in a leadership training program.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
        {
          _id: "7dfae56e-6f3b-474f-91d8-b0d7a6a6aff3",
          bookmarks: [],
          firstName: "Frank",
          lastName: "Brown",
          username: "frank@example.com",
          password: "frank123",
          userHandler: "frankbrown",
          bio: "Entrepreneur and startup enthusiast",
          link: "https://peerlist.io/frankbrown",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
            {
              firstName: "Alice",
              lastName: "Johnson",
              username: "alice@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
            },
            {
              firstName: "Bob",
              lastName: "Davis",
              username: "bob@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
            },
            {
              firstName: "Charlie",
              lastName: "Wilson",
              username: "charlie@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "david@example.com",
    bookmark: [],
    comments: [
      {
        _id: "46093bb0-4281-40c7-814e-0e2a50937319",
        username: "henry@example.com",
        text: "Investing in leadership skills benefits the entire organization.",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "d4e1fada-f546-4d05-8cf8-53f48c473d27",
    content: "To code or not to code that is the Question.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "5300e5d2-c94f-4951-8db6-630cf0794070",
    content: "Love is the greatest force in the universe. ❤️",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "8aae6c57-e5e4-4d15-8a89-7bbe3c0cf82d",
    content: "The best preparation for tomorrow is doing your best today.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "e965c900-9281-4b07-8de9-4156abd5fb49",
          bookmarks: [],
          firstName: "Emma",
          lastName: "Thomas",
          username: "emma@example.com",
          password: "emma123",
          userHandler: "emmathomas",
          bio: "Creative designer with a passion for aesthetics",
          link: "https://peerlist.io/emmathomas",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "8b063781-6c7e-4724-abf6-84fc6e82f582",
    content:
      "Success is not the key to happiness. Happiness is the key to success.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "73e82a93-e9e1-47fa-80e4-59f71a29e4a5",
    content: "In the middle of every difficulty lies opportunity.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "bb5b09bf-2bca-4d02-b199-48d9083b7501",
          bookmarks: [],
          firstName: "Alice",
          lastName: "Johnson",
          username: "alice@example.com",
          password: "alice123",
          userHandler: "alicejohnson",
          bio: "Passionate about creating meaningful user experiences",
          link: "https://peerlist.io/alicejohnson",
          profilePic:
            "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          following: [
            {
              firstName: "Henry",
              lastName: "Smith",
              username: "henry@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_3ef0b609-e702-4749-ad41-177a0a8059a9.jpg?updatedAt=1686940612135",
            },
          ],
          followers: [
            {
              firstName: "David",
              lastName: "Taylor",
              username: "david@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
            },
            {
              firstName: "Frank",
              lastName: "Brown",
              username: "frank@example.com",
              profilePic:
                "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_ae7f0ecc-879d-412a-8c1a-ec8932c5ecd3.jpg?updatedAt=1686940612138",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    username: "henry@example.com",
    bookmark: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
