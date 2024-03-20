/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "Our Mission:",
    answer:
      "At the core of TimelyCare's mission is the commitment to prioritize your well-being. We understand the challenges individuals face when seeking specialist care, and we are here to change the game. Our platform empowers you to take control of your health journey by facilitating direct specialist appointments, bypassing the traditional hospital visit maze..",
  },
  {
    id: 2,
    question: "Innovation at Its Core:",
    answer:
      "TimelyCare is the product of relentless dedication and innovation. Our teams at ALX worked tirelessly to develop a service that redefines how healthcare is accessed. By leveraging cutting-edge technology and a user-centric approach, we've created a platform that simplifies the entire healthcare process..",
  },
  {
    id: 3,
    question: "Empowering Your Well-being",
    answer:
      "Your health is our priority. TimelyCare is not just a service; it's a commitment to empower individuals seeking specialist care. We believe that everyone deserves timely access to quality healthcare, and we're here to make that a reality.",
  },

  // More questions...
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-two sm:text-4xl">
            Welcome to TimelyCare – Elevating your health, one appointment at a
            time
          </h2>
          <p className="mt-4 text-gray-500">
            At TimelyCare, we believe that your well-being should never be
            compromised by cumbersome healthcare processes. Our journey began at
            ALX, where a dedicated team of innovators pooled their passion and
            expertise to create a revolutionary solution that puts your health
            first.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-3 text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="max-w-2xl lg:mx-auto lg:text-center">
        <h2 className="text-xl font-extrabold tracking-tight text-two sm:text-4xl">
          Join us on this transformative journey as we revolutionize the
          healthcare experience. TimelyCare is your partner in prioritizing
          well-being, because your health shouldn't wait!.
        </h2>
      </div>
    </div>
  );
}
