package codejejus.inddybuddy.game;

import codejejus.inddybuddy.member.entity.MemberPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class GameController {
    private final GameService gameService;

    @PostMapping("/games")
    public ResponseEntity<GameDto.Response> createGame(@AuthenticationPrincipal MemberPrincipal memberPrincipal,
                                                       @RequestBody GameDto.Post postDto) {
        return new ResponseEntity<>(gameService.createGame(memberPrincipal, postDto), HttpStatus.CREATED);
    }

    @PatchMapping("/games/{game-id}")
    public ResponseEntity<GameDto.Response> modifyGame(@PathVariable("game-id") long gameId,
                                                       @AuthenticationPrincipal MemberPrincipal memberPrincipal,
                                                       @RequestBody GameDto.Patch patchDto) {
        return new ResponseEntity<>(gameService.modifyGame(gameId, memberPrincipal, patchDto), HttpStatus.OK);
    }

}
