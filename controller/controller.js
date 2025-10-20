const service = require("../service/service");

// Saare cricket matches fetch karne ke liye
exports.getMatches = async (req, res, next) => {
    try {
        const url = "https://central.zplay1.in/pb/api/v1/events/matches/4";

        const matchesData = await service.scraping(url);
        return res.status(200).json({ message: 'Cricket matches data fetched successfully', data: matchesData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}

// Event ID ke hisab se specific match details fetch karne ke liye
exports.getMatchDetails = async (req, res, next) => {
    try {
        const { eventId } = req?.params;
        
        if (!eventId) {
            return res.status(400).json({ error: 'Event ID required hai' });
        }

        const url = `https://central.zplay1.in/pb/api/v1/events/matchDetails/${eventId}`;

        const matchDetails = await service.scraping(url);
        return res.status(200).json({ message: 'Match details fetched successfully', data: matchDetails });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}