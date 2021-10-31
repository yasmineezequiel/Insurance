import useFetchData from "../../hooks/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

const Insurances = () => {
  const { loading, apiData, serverError } = useFetchData(
    "https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE"
  );

  return (
    <>
      {loading && <span>Loading...</span>}
      {!loading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <div className="app" style={{ paddingTop: "10%" }}>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "18px",
              color: "#121212",
              textAlign: "center",
              paddingBottom: "5%",
            }}
          >
            {"Our Coverage".toUpperCase()}
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.3,
                spaceBetween: 9,
              },
              "@0.75": {
                slidesPerView: 2.3,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {apiData.map((insurance, index) => (
              <>
                <SwiperSlide key={index}>
                  <div className="icon">
                    <img
                      src={insurance.icon.variants.light.svgUrl}
                      alt="icon"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div
                      className="title"
                      style={{
                        margin: "5px",
                        paddingTop: "20px",
                        textAlign: "left",
                      }}
                    >
                      {insurance.title}
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Insurances;
