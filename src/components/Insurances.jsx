import { useEffect, useState } from "react";

const Insurances = () => {
  const [loading, setLoading] = useState(false);
  const [insuranceOptions, setInsuranceOptions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE"
      );
      const data = await response.json();
      console.log(data);
      setLoading(true);
      setInsuranceOptions(data);
      setLoading(false);
    } catch (error) {
      alert("won't work");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading === true && <div>Loading</div>}
      <h1
        style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#121212" }}
      >
        {"Our Coverage".toUpperCase()}
      </h1>
      {insuranceOptions.map((insurance, index) => (
        <>
          <div key={index}>
            <div className="icon">
              <img
                src={insurance.icon.variants.light.svgUrl}
                alt="Icon"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div>{insurance.title}</div>
          </div>
        </>
      ))}
    </>
  );
};

export default Insurances;
