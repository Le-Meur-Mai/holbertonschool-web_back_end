class ClassRoom {
    constructor(maxStudentsSize) {
        this._maxStudentsSize = maxStudentsSize;
    }
}

export default function initializeRooms() {
    const array = [19, 20, 34];
    const listClassRooms = []
    for (const i of array) {
        const room = new ClassRoom(i);
        listClassRooms.push(room)
    }
    return listClassRooms;
}
