import alt from "../alt"
import toastr from "toastr"

class Actions {
    getAllAnime(payload) {
        return payload
    }

    deleteAnime(id) {
    toastr.success(`Deleted anime with this id ${id} from Miru table`)
    return id
    }

    resetAnimeTable(payload) {
        toastr.success("Reset the table full of anime")
        return payload
    }

    resetAnimeGenreTable(payload) {
        toastr.success("Reset genres.")
        return payload
    }
    resetUserTable(payload) {
        toastr.success("Reset the user table.")
        return payload
    }
    resetReviewTable(payload) {
        toastr.success("Reset the reviews.")
        return payload
    }
    resetUserReviewTable(payload) {
        toastr.success("Reset the user review table.")
        return payload
    }

}

export default alt.createActions(Actions)