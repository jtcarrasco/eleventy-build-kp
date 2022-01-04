const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/style.css'); //styling in public folder
  eleventyConfig.addPassthroughCopy('./src/assets'); // assets in public folder
  eleventyConfig.addPassthroughCopy('./src/admin'); // assets in public folder

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}
