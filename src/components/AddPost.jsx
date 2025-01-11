// import { useState } from "react"
function AddPost({ handleSubmit, handleInput, formData }) {


    return (

        <section className="my-4">
            <h2>Aggiungi nuovo post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <h5>Titolo del post</h5>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={formData.title}
                        onChange={handleInput}
                        name="title"
                    />
                </div>

                <div className="mb-3">
                    <h5>Immagine del post</h5>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        value={formData.image}
                        onChange={handleInput}
                        name="image"
                    />
                </div>

                <div className="mb-3">
                    <h5>Contenuto del post</h5>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        value={formData.content}
                        onChange={handleInput}
                        name="content"
                    />
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="published"
                        name="published"
                        onChange={handleInput}
                        value={formData.published}
                        checked={formData.published}
                    />
                    <h5>Pubblica</h5>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>

    )
}

export default AddPost