import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
import React from "react";

const Categories = () => {
  const router = useRouter();
  const { data, loading, error } = useFetch(`/categories`);
  const handleClick = (id) => {
    if (id) {
      router.push(`/products/${id}`);
    }
  };

  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => router.push(`/products/${data[2].id}`)}>
            {!data ? data?.[2].attributes?.title : <span>Promotions</span>}
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => router.push(`/products/${data[0].id}`)}>
            {!data ? data?.[0].attributes?.title : <span>Femme</span>}
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => router.push(`/products/${data[3].id}`)}>
            {!data ? (
              data?.[3].attributes?.title
            ) : (
              <span>Nouvelle collection</span>
            )}
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button onClick={() => router.push(`/products/${data[1].id}`)}>
                {!data ? data?.[1].attributes?.title : <span>Homme</span>}
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button onClick={() => router.push(`/products/${data[5].id}`)}>
                {!data ? data?.[5].attributes?.title : <span>Accessoires</span>}
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => router.push(`/products/${data[4].id}`)}>
            {!data ? data?.[4].attributes?.title : <span>Chaussures</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
