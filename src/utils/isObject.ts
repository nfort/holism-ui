const isObject = (item: any) => item && typeof item === "object" && !Array.isArray(item);

export default isObject;
