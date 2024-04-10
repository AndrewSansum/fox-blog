const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Title:</label>
        <input type="text" required />
        <label>Body:</label>
        <textarea required></textarea>
        <label>Author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
      </form>
    </div>
  );
};

export default Create;
