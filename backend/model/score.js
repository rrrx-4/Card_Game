import { Entity, Schema } from "redis-om";

class Score extends Entity {

    toJSON() {
        return {
            id: this.entityId,
            username: this.username,
            score: this.score,
        }
    }
}

export const scoreSchema = new Schema(Score, {
    username: {
        type: 'string'
    },
    score: {
        type: "number"
    }
}, {
    dataStructure: "JSON"
}) 