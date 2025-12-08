export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (sanFranciscoNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(sanFranciscoNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
